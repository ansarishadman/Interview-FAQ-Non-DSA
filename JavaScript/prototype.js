/* Prototype:
1. Create an object:
    let object = {
        name: 'Shadman',
        city: 'Jamshedpur',
        getIntro() {
            console.log(this.name + ' from ' + this.city)
        }
    }
2. Access object properties:
    object.name // outputs -> 'Shadman'

-->> When we access object properties there are hidden classes and hidden properties that provides us with object property
    accessibility 

**Event if we create a function this gets access to properties such as *call, bind etc. This happens because functions are 
also somewhat objects.

## So these comes via Prototypes!

So whenever we create any object JS attaches this hidden properties to this object.

Therefore when we for Example have an array declaration: 
    let arr = [1, 3, 5]
    and try --> arr.__proto__.<**provides with properties like forEach, etc.>
    Same is the case with functions()

** So when we do:
    arr.__proto__
    it is similar to :
    Array.prototype

    Also we can access prototypes inside arr.__proto__
    which provides us with -> arr.__proto__.__proto__
    which is similar to Object.prototype

# So now when we do arr.__proto__.__proto__.__proto__ is [null]
*/

// Function.prototype.mybind = function() {
//     console.log('miss me')
// }

// function fun() {

// }
