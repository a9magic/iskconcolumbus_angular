# ISKCON Columbus Website - README

## DEMO : <a href="http://www.krishnatemple.co" target="_blank">Click here</a>

![Design](http://image.prntscr.com/image/7fc2ea149f83449c9545c339526aa148.png)

+ Technologies
    -	WebStorm & IntelliJ as IDE
    -	AngularJS – for core dynamic routes to pages
    -	HTML5/CSS – to develop beautiful lightweight pages
    -	Jquery/parallax – for scrolling and adding parallax effect
    -	Bootstrap – adding more beauty to the pages
    -	Font-awesome – mini-logos and icons
    -   Grunt/Node - Server to deploy the application 
    
![Design](http://www.clipartbest.com/cliparts/4Tb/MKM/4TbMKMXLc.png)
# Header Section
```
- Creating ISKCON Columbus Logo
- Design Banner and Slogan 
- Links to Social Media 
```

# Sidebar & Dashboard 
![Design](http://image.prntscr.com/image/467f5ab0406047148e47fc6b5a8b3d89.png)

### Home Page
```
- Parallax effect to view images & Page content
- Temple Schedule 
- Next Maha Satsang announcement
- Sponsor Sunday Feast
- Sign up for services
```

### Srila Prabhupada 
![Design](http://image.prntscr.com/image/382404b0f19742f88139a2e58769e57a.png)

+ Founder Acharya
```
- Timeline of Srila Prabhupada's journey
```
+ Biography
```
- Prabhupada's biography
```
+ Books
```
- Links to his books & BTG 
```
+ Lectures
```
- links to Prabhupada's audio/video lectures
```

### About us
![Design](http://image.prntscr.com/image/a248bf007f564c769779dbbdde1b841d.png)

+ Our Mission
```
- need content to display
```
+ Governance
```
- need content to display
```
+ Speakers
```
- need content to display
```
+ Youth
```
- need content to display
```
![Design](http://www.clipartbest.com/cliparts/4Tb/MKM/4TbMKMXLc.png)

## Installation
####1. Clone this project or Download that ZIP file

```sh
$ git clone https://a9magic@bitbucket.org/a9magic/iskconcolumbus.git
```

####2.  Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
 
 
```sh
$ apt-get install npm
$ npm install -g grunt-cli
$ npm install -g bower
```
####3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```
- bower install is ran from the postinstall
```sh
$ npm install 
```
- a shortcut for `grunt serve`
```sh
$ npm start
```
- a shortcut for `grunt serve:dist` to minify the files for deployment
```sh
$ npm run dist 
```


**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

```sh
sudo chown -R [user name] ~/.config
```


## Roadmap

- Add sample AJAX calls and make the directives more modular

### Automation tools

- [Grunt](http://gruntjs.com/)
