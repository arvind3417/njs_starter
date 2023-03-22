const express = require('express');
const session = require('express-session');

const app = express();

// Use express-session middleware with a session secret
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
}));

// Middleware function to require authentication
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    //  res.status(401).send('Not authorized');
     res.redirect('login');
     return;
  }
  next();
}

app.get('/login' , (req , res)=>{

   res.send('hello from simple server please login :)')

})

// Login route
app.post('/login', function(req, res) {
  // Authenticate user (replace with your own authentication logic)
  const user = { id: 123 };
  
  // Set user ID in session
  req.session.userId = user.id;
  
  res.send('Logged in successfully');
});

// Signup route
app.post('/signup', function(req, res) {
  // Create new user (replace with your own user creation logic)
  const user = { id: 456 };
  
  // Set user ID in session
  req.session.userId = user.id;
  
  res.send('Signed up successfully');
});

// Dashboard route - requires authentication
app.get('/dashboard', requireAuth, function(req, res) {
  // Return dashboard data
  res.send('Welcome to the dashboard!');
});

// Start server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
