# &lt;my-element&gt;

TODO: Write a project description

> Maintained by [Your Name](https://github.com/yourname).

## Demo

> [Check it live](http://webcomponents.github.io/element-boilerplate).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="src/my-element.html">
    ```

3. Start using it!

    ```html
    <my-element></my-element>
    ```

## Setup

In order to run it locally you'll need a basic server setup.

1. Install [NodeJS](http://nodejs.org/download/).
2. Install [GruntJS](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g grunt-cli
    ```

3. Install local dependencies:

    ```sh
    $ npm install
    ```

4. Run a local server and open `http://localhost:8000`.

    ```sh
    $ grunt connect
    ```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`foo`      | *string*                  | `bar`               | Lorem ipsum
`bar`      | `abc`, `def`, `ghi`       | `foo`               | Lorem ipsum
`height`   | *int*                     | `100`               | Lorem ipsum

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