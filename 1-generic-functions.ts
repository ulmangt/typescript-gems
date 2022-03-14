//import _ from "lodash";
//var _ = require('lodash');

function test( result: boolean )
{
    if ( !result )
    {
        throw "Test Failed"
    }
}

/**
 * Return a new array containing values for even indexes of the input array (index 0, 2, etc...).
 * 
 * Take and return arrays containing values of any type by using a typescript generic function:
 * https://www.typescriptlang.org/docs/handbook/2/generics.html#working-with-generic-type-variables
 */
function getEvenIndexes<Type>( array: Array<Type> ): Array<Type>
{
    return array.filter( ( value, index ) => index % 2 === 0 );
}

test( _.isEqual( getEvenIndexes( [ 1, 2, 3, 4 ] ), [ 1, 3 ] ) )

/**
 * Create an interface describing a function which takes an array and returns an array of the same type.
 * 
 * The getEvenIndexes function above is an instance of this interface.
 */
interface ArrayModifier
{
    <Type>( array: Array<Type> ): Array<Type>;
}

var myArrayModifier: ArrayModifier = getEvenIndexes;

/**
 * Create a function which takes an ArrayModifier and an array and returns true if the ArrayModifier would
 * modify the provided array.
 */
function wouldModifyArray<Type>( modifier: ArrayModifier, array: Array<Type> )
{
    var modifiedArray = modifier( array );
}
