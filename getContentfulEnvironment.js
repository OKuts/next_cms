const contentfulManagement = require("contentful-management")

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: 'CFPAT-M-ro8wlpRxpi_ZWRhzkjxrqCSqgjg_FQqRsgxTY7VBY',
    })

    return contentfulClient
        .getSpace('3s7c2r7n3mg2')
        .then(space => space.getEnvironment('master'))
}
