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
