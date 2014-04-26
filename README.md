# &lt;my-element&gt;

> TODO: Write a project description

## Demo

[Check it live!](http://webcomponents.github.io/element-boilerplate)

## Usage

1. Install the component using [Bower](http://bower.io/):

    ```sh
    $ bower install my-element --save
    ```

2. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

3. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/my-element/dist/my-element.html">
    ```

4. Start using it!

    ```html
    <my-element></my-element>
    ```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`name`     | *string*                  | `World`             | Lorem ipsum

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

2. Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

3. To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt
    ```

4. Once you finish developing it, build the distribution files and publish it on Bower.

    ```sh
    $ grunt build
    $ bower register my-element https://github.com/you/my-element
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/webcomponents/element-boilerplate/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
