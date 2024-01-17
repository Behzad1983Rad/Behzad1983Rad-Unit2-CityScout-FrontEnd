<script setup>




</script>


<template>

<head>
  <title>Discover Your Next Trip</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body class="container">
  <h1 class="jumbotron text-center">Discover Your Next Trip</h1>
  <div class="row">
  <div class="col-xs-6 col-xs-offset-6">
    <form action="/" method="GET">
      <div class="input-group">
        <input id="discoverForm" type="text" name="username" class="form-control"
          placeholder="Name a City">
        <span class="input-group-btn">
          <button class="btn btn-success" type="submit">Go!</button>
        </span>
      </div>
    </form>
  </div>
</div>	  
    
</body>

    <!-- <h1>Discover Your Next Trip</h1>
    <h3>We need to add a search feature and add it to an API which provides cities info</h3>
    <form class="example" action="action_page.php">
    <input type="text" placeholder="Search.." name="search">
    <button type="submit">Submit</button>
    </form> -->



</template>

<style>
form {
    margin-right: 0px;
}

h1 {
    height: 50px;
    text-align: center;
}



</style>