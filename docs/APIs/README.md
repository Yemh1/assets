[<- Back to the Main Readme](../docs/README.md)

# BreatheCode API's

This directory contains several APIs needed to run the breathecode platform:

1. [/Credentials](./credentials/README.md): OAuth implementation on the BC Platform
3. [/Quizes](./quiz/README.md): Used by the breathecode platform quizes.
4. [/Lessons](./lesson/README.md): All the lessons included on breathecode.
5. [/Sounds](./sound/README.md): Sounds for games and tutorials.
6. [/Events](./event/README.md): For the academy events and workshops (add, edit, delete, checking, etc).
7. [/NPS](./nps/README.md): API implementation for Net Promoter Score
8. [/VTutorials](./vtutorial/README.md): Use by the breathecode platform to enhance the **Video Tutorials** (captions, instructions, etc).
9. [/Syllabus](./syllabus/README.md): All the syllabus available on the BC Platform
10. [/Replit](./replit/README.md): All the replits available on the BC Platform
12. [/Projects](./project/README.md): All the lessons included on projects.breatheco.de
12. [/Img](./img/README.md): Database of images for tutorials, marketing, etc.
13. [/Fake](./fake/README.md): A series of endpoints exposed for dummy calls on the breathecode tutorials and exercises
14. [/Hooks](./hooks/README.md): Hooks used by 3rd party services like ActiveCampaign, Zapier, etc.

##### Additional APIs:
- [/Kill-The-Bug](./kill-the-bug/README.md): Great game to play with audiences interested in learning to code.

### :black_square_button: API's Pending for development
- [Resources](../apps/chatbot/README.md): We need an API to manage (GET, POST, PUT, DELETE) links to different resources around the classes.
- [Status](../apps/status/README.md): Displays a status check of the entire BreatheCode platform.
- [Student External Profile (SEP)](../apps/sep/README.md): Search and display any student external profile

## Usage

The entire repository uses [SlimPHP](https://www.slimframework.com/) to create each of the APIs, and it also 
contains other class helpers to interface with SQLite, JSON Files, Amazon Email Service, etc.

### Steps to create a new API

1. Create a new folder inside the apis/ directory.
```sh
$ mkdir ./apis/<your_api_name_slug>
$ cd <your_api_name_slug>
```
2. Add a .htaccess file to that folder to redirect all the request to index.php
```sh
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [L]
</IfModule>
```
3. Add an index.php file
```php
	require_once('../../vendor/autoload.php');
	require_once('../SlimAPI.php');
	require_once('routes.php');
	
	$api = new SlimAPI();
	$api = addAPIRoutes($api);
	$api->run(); 
```
4. All the routs of your API should be inside a routs.php file with the following content
```php
 use Psr\Http\Message\ServerRequestInterface as Request;
 use Psr\Http\Message\ResponseInterface as Response;
 
 function addAPIRoutes($api){
 
  /**
   * This is an example endpoint that matches the following URL:
   * GET: /apis/<your_api_name_slug>/all
  */
 	$api->get('/all', function (Request $request, Response $response, array $args) use ($api) {
 	    //any php logic for your function
 	});
 	
 	//add here any other endpoints you want
 	
 	return $api;
 }
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEzOTA2ODUzLC0xNTAzODcwMTg3XX0=
-->