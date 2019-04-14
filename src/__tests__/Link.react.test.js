import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.ucp.ac.uk">University Centre Peterborough</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    //re-rendering now class should be STATUS.HOVERED
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering now class hsould be STATUS.NORMAL
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();


})