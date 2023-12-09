const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Triangle should render correct SVG', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  test('Circle should render correct SVG', () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });

  test('Square should render correct SVG', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="red" />');
  });
});