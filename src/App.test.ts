import {fieldGen, checkWin} from "./App"
describe("Testing tictactoe",()=>{
    it("Generated field should be empty",()=>{
        expect(fieldGen()).toStrictEqual([
            ["","",""],
            ["","",""],
            ["","",""],
        ])
    })
    it("Wins should be detected",()=>{
        let field = [
            ["X","X","X"],
            ["","",""],
            ["","",""],
        ]
        expect(checkWin(field)).toBe(true)
        field = [
            ["X","",""],
            ["X","",""],
            ["X","",""],
        ]
        expect(checkWin(field)).toBe(true)
        field = [
            ["","O",""],
            ["","O",""],
            ["","O",""],
        ]
        expect(checkWin(field)).toBe(true)
        field = [
            ["X","",""],
            ["","X",""],
            ["","","X"],
        ]
        expect(checkWin(field)).toBe(true)

    })



}
)