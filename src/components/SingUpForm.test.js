const rewire = require("rewire")
const SingUpForm = rewire("./SingUpForm")
const SignUpForm = SingUpForm.__get__("SignUpForm")
// @ponicode
describe("container", () => {
    let inst

    beforeEach(() => {
        inst = new SignUpForm()
    })

    test("0", () => {
        let callFunction = () => {
            inst.container()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("inputfields", () => {
    let inst

    beforeEach(() => {
        inst = new SignUpForm()
    })

    test("0", () => {
        let callFunction = () => {
            inst.inputfields()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("submitbutton", () => {
    let inst

    beforeEach(() => {
        inst = new SignUpForm()
    })

    test("0", () => {
        let callFunction = () => {
            inst.submitbutton()
        }
    
        expect(callFunction).not.toThrow()
    })
})
