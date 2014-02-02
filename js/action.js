function appendCode(text) {
  console.log(text);
  document.querySelector('#code').innerHTML = document.querySelector('#code').innerHTML + '<br>' + text;
}

function init() {
  appendCode('<span style="color: red">hackbot@mozillabd.org:~$ start_server</span>');
  setTimeout(function() {
    appendCode("<span style=\"color: yellow\">Initializing...</span>")
  }, 1000);
  setTimeout(function() {
    appendCode("<span style=\"color: yellow\">Loading modules...</span>")
  }, 2000);
  setTimeout(function() {
    appendCode("<span style=\"color: orange\">Preparing workbench...</span>")
  }, 3000);
  setTimeout(function() {
    appendCode("Ready!")
    document.querySelector('#facebookID').removeAttribute('disabled');
    document.querySelector('#hackbutton').removeAttribute('disabled');
  }, 5000);
}

function showUserData() {
  FB.api('/' + document.querySelector('#facebookID').value, function(response) {
    appendCode('Name: ' + '<strong>' + response.name + '</strong>');
    appendCode('ID: ' + '<strong>' + response.id + '</strong>');
    appendCode('Link: ' + '<strong>' + response.link + '</strong>');
    document.querySelector('#hackbutton').innerHTML = 'Get Password';
    document.querySelector('#hackbutton').setAttribute('onclick', 'hack()');
    document.querySelector('#hackbutton').setAttribute('class', 'btn btn-danger');
    appendCode('<span style="font-size: 20px">Press <strong>Get Password</strong> to start!</span>');
  });
}

function hack() {
  document.querySelector('#code').innerHTML = "";
  setTimeout(function() {
    appendCode('<span class="bigtext" style="color: violet">জ্বী, আপনাকে বোকা বানানো হয়েছে।<br /></span>');
  }, 1000);
  setTimeout(function() {
    appendCode('<span class="bigtext" style="color: skyblue" style="color: violet" style="color: violet">ফেসবুক হ্যাক, অ্যাকাউন্ট হ্যাকের ব্যাপারস্যাপারগুলো সাধারণত ভুয়া হয়, সাবধান!<br /></span>');
  }, 2000);
  setTimeout(function() {
    appendCode('<span class="bigtext" style="color: orange" style="color: violet">এসবে সময় নষ্ট না করে আসুন সৃজনশীল কিছু করি, ওয়েব ডেভেলপমেন্ট শিখি!<br /></span>');
  }, 3000);
  setTimeout(function() {
    appendCode('<span class="bigtext" style="color: yellow">ঘুরে আসুন বাংলা <a href="http://developer.mozilla.org/bn-BD">মোজিলা ডেভেলপার নেটওয়ার্ক</a>।</span>');
  }, 4000);
  setTimeout(function() {
    appendCode('<span class="bigtext" style="color: green"><br /><br />জনসচেতনতায় <a href="http://mozillabd.org">মোজিলা বাংলাদেশ</a></span>');
    document.querySelector('#hackbutton').innerHTML = 'Visit Mozilla Developer Network';
    document.querySelector('#hackbutton').setAttribute('onclick', '');
    document.querySelector('#hackbutton').setAttribute('class', 'btn btn-success');
    document.querySelector('#hackbutton').setAttribute('href', 'http://developer.mozilla.org/bn-BD');
  }, 6000);
}