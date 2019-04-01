/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global Object binding, when "this" keyword is used, the context that it referes to is that of the window or global object scope.
    "This" has no other object it knows to refer to accept the main overall scope.
* 2. Implicit Binding, when "This" keyword is used in a dot notation and function or var is access behind it this is implicitly saying I am 
    accessing the property or method accosicated with this particular object.
* 3. New Binding, when the "this" keyword is used and in conjuction we used the "new" keyword to intanciate a new object with the constructor function.
     We are saying that we are creating a copy of the base object and inheriting all properties and methods, but we need to give the new objects it's own
    versions of the properties and methods. The "this" keyword will now set or output values associated with the new object instead of altering the base object. Alternativly put it's like
    saying here is a application form template and you need to make a "new" copy of of the form so you can fill it out without affecting the template and whatever you put
    on "this" new form we can refernce a review later and will be specific to the filer,
* 4. Explicit Binding, is when we use 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding.
function saySomething(userString){
    let anyString = userString
    console.log(this)    // right here we are saying even though we are in the fucntions scope we have no context as to what "this" is so we default to the global scope
    return anyString
}

saySomething()

// Principle 2

// code example for Implicit Binding
const starWarsObj ={
    quote:" I am your Father!!",
    sayQuote : function(yourName){
        console.log(`${yourName}, ${this.quote}`)
    }
}

starWarsObj.sayQuote("Joe") // right here we are saying this objects' sayQuote()



// Principle 3

// code example for New Binding
function Ball(obj){
    this.type = obj.type
    this.material = obj.material
    this.details = function(){
        console.log(`I am a ${this.type} ball and I'm made from ${this.material}.`)
        console.log(this)
    }
} 

const basketBall = new Ball({type:"Basketball", material:"leather" }) // this is just making a copy of the ball object and filling the properties with a user defined object, the "this" will now refer to the basketBall obj.
const kickBall = new Ball({type:"KickBall", material:"Rubber" })
basketBall.details()
kickBall.details()

// Principle 4

// code example for Explicit Binding