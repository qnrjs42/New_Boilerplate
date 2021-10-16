const auth = require("./auth")
// @ponicode
describe("auth.auth", () => {
    test("0", () => {
        let callFunction = () => {
            auth.auth({ w_auth: "for", token: "==", cookies: { w_auth: "access", token: "|" }, user: "username" }, { json: () => "\"{\"x\":[10,null,null,null]}\"" }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            auth.auth({ w_auth: "color", token: "+", cookies: { w_auth: "test", token: "not in" }, user: 123 }, { json: () => "\"{\"x\":[10,null,null,null]}\"" }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            auth.auth({ w_auth: "Token ", token: "×", cookies: { w_auth: "array-original-", token: "/" }, user: 123 }, { json: () => "\"{\"x\":[10,null,null,null]}\"" }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            auth.auth({ w_auth: "define", token: "%a", cookies: { w_auth: "attributes", token: "\\" }, user: "user123" }, { json: () => "\"{\"x\":5,\"y\":6}\"" }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            auth.auth({ w_auth: "activate ", token: ",", cookies: { w_auth: "vindex-merge-", token: "</s>" }, user: "username" }, { json: () => "\"{\"x\":5,\"y\":6}\"" }, () => " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            auth.auth(undefined, undefined, () => "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
