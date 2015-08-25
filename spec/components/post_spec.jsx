'use strict';

var ReactTestUtils;

describe('Post',function() {
    beforeEach(function() {
        ReactTestUtils = React.addons.TestUtils;
    });

    it('Check Text Assignment', function() {
        var post = <Post content='test'/>;
        ReactTestUtils.renderIntoDocument(post);
        expect(post.props.content).toBe('test');
    });

    afterEach(function() {
      console.log("cris");
    });
});
