[$.html5data](https://markdalgleish.com/projects/jquery-html5data)
==================================================================

You wrote an awesome jQuery plugin. You're already `$.extending` like a boss.
Now make any setting available to your plugin users via HTML5 data attributes.

Turn this:
----------

```
<section data-myplugin-foo-bar="true" data-myplugin-offset-x="10" data-myplugin-offset-y="20"> </section>
```

Into this:
----------

```
{
    //note the lack of the 'myplugin' prefix
    fooBar: true,
    offsetX: 10,
    offsetY: 20
}
```

So you can do this:
-------------------

```
var settings = $.extend(
        {}, //new object
        defaults,
        options,
        $elem.html5data('myplugin')
    );
```

Don't want a dependancy?
------------------------

```
var settings = $.extend(
        {},
        defaults,
        options,

        //check if the plugin exists first
        ( typeof $.html5data === 'function' ?
          $elem.html5data('myplugin')
          //if not, fall back to the global namespace
          : $elem.data() )
    );
```

Customise $.html5data
---------------------

All settings are completely optional.

```
$elem.html5data('myplugin', {
        
    //boolean settings
    parseBooleans: true|false [default: true],
    parseNulls: true|false [default: true],
    parseNumbers: true|false [default: true],

    //custom parsing function
    parse: function(val){ return val; }

});
```


How to Build
------------

The code is minified using UglifyJS using the following command:

`uglifyjs -o jquery.html5data.min.js jquery.html5data.js`

Questions?
----------

Contact me on GitHub or Twitter: [@markdalgleish](http://twitter.com/markdalgleish)