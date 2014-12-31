{% extends 'layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>
  <div class="ui segment">
  	<h1 class="ui header">You are not signed in</h1>
    {{user.username}} {{user.email}}
  	<a class="ui left icon blue button" href="http://localhost:3000/signin?callbackUrl=http://localhost:3001/login">
  		<i class="sign in icon"></i>
  		Sign In
  	</a>
  	<a class="ui left icon blue button" href="http://localhost:3000/signup?callbackUrl=http://localhost:3001/login">
  		<i class="signup icon"></i>
  		Sign Up
  	</a>
  	<a class="ui facebook button" href="/auth/facebook">
      <i class="facebook icon"></i>
      Facebook
    </a>
    <a class="ui twitter button" href="/auth/twitter">
      <i class="twitter icon"></i>
      Twitter
    </a>
    <a class="ui google plus button" href="/auth/google">
      <i class="google plus icon"></i>
      Google Plus
    </a>
  </div>
{% endblock %}
