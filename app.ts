/**
 * Created by dasco on 3/9/2017.
 */
let myName: string = "Drake";
let myAge: number = 20;
let anything: any;
anything = 12;

// myName = 30;

function controlMe(isTrue: boolean, somethingElse: boolean) {
    let result: number;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}