import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (word: string) => {
	const firstLetter = word.substring(0, 1);
	const capitalizedFirstLetter = firstLetter.toUpperCase();
	const remainingWord = word.substring(1, word.length);

	return capitalizedFirstLetter.concat(remainingWord);
}

export const replaceCharacter = (word: string, character: string, replacedCharacter: string) => {
	const wordToReplace = word;

	return wordToReplace.replace(character, replacedCharacter);
}

// Truncate string
export const truncateString = (str: string, length: number) => {
    if(str.length >= length)
        return `${str.substring(0,length)}...`
    
    return str;
}

// Slug converter
export const slugConverter: (value: string) => string = (title: string) => {
    const lowerCaseTitle = title.toLowerCase();
    const replaceBlankSpacesToDash = lowerCaseTitle.trim()
        .replace(/\s+/g, '-')        
        .replace(/&/g, '-and-') 
        .replace(/%/g, '-percentage-')      
        .replace(/\$/g, '-dollar-')
        .replace(/[^\w\-]+/g, '')     
        .replace(/\--+/g, '-')        
        .replace(/^-+/, '')         
        .replace(/-+$/, '');

    return replaceBlankSpacesToDash;
}

// Reverse slug
export const reverseSlug: (value: string) => string = (slug: string) => {
    let reverseSlugToInitialState = slug.trim()        
        .replace(/-and-/g, '-&') 
        .replace(/-percentage-/g, '-%')      
        .replace(/-dollars-/g, '-$')     
        .replace(/\-+/g, ' ');

    return reverseSlugToInitialState;
}


export const flattenObject = (data: object) => {
    return Object.entries(data).map(([_, value]) => value).flat()
}
 

function padWithZeros(number: number, minLength: number) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;

    return "0".repeat(minLength - numberString.length) + numberString;
} 
