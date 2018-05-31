import { FormControl } from "@angular/forms";

//custom validator
export function restrictedWords(words:Array<string>){
    return (control: FormControl): {[key: string]: any} => {
        if (!words) return null

        let invalidWords = words.map(word => control.value.includes(word) ? word : null)
        .filter(word => word != null)

        return (invalidWords && invalidWords.length > 0) 
            ? {'restrictedWords': invalidWords.join(", ")} 
            : null
    }
}
