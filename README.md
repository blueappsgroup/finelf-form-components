## finelf-form-componenets

Easy flexible react form components based on formik

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

To start storybook and you can do changes and you will see changes. Use this to develop new features components etc.

### `yarn build-storybook`

To build static storybook.


### Usign `Agreements` component

To use agrements put `apiUrl` prop to from and very important is form `id` prop because it points which agreements will be fetched.

```JSX
<Form id="kdz" apiUrl="apiUrl">
    <Header withBorder text="Test title" />
    <Header text="Test title" type="subheader" />
    <Agreemnets hasReadMore linksForReplace={linksForReplace} />
    <Button type="submit" text="Send" />
</Form>
```

To use agrements with 'read more collaspe' use `hasReadMore` prop in `Agreements` component.
!Important agreement in data base should contain `--MORE--` string, agreement will be splited in the `--MORE--` place.

```JSX
<Form id="kdz" apiUrl="apiUrl">
    <Header withBorder text="Test title" />
    <Header text="Test title" type="subheader" />
    <Agreemnets hasReadMore linksForReplace={linksForReplace} />
    <Button type="submit" text="Send" />
</Form>
```

### Publishing

made changes and commit it to `master`
login into npm with `npm login`<br />
run `npm publish` !important change `package.josn` `version` value to publish package

### Instalation 

install it to your project for example `yarn add finelf-form-components`<br />
see storybook stroies to get wroking examples

### see `package.json` to see more scripts
