'use strict';

describe('Post form', function() {
    it('shows success message after publishing a form', function() {
        browser.get('/');
        var textArea = element(by.id('post-content-editable'));
        textArea.sendKeys('Amazing post');
        element(by.id('publish-post')).click();
        var messageLabel = element(by.id('submit-message'));
        expect(messageLabel.getText()).toEqual('Successfully published!');
    });

});
