# react-blog-management

# Day - 46: recap of basic javascript

switch case:
switch(expression)
{
case condition: statement;break;
case condition2 : statement2:break;
default : default statement;
}

so if the value of expresssion is equal to the value of case condition then the statement associated with that specific case is executed .

For instance:

FIRST CASE:

const value = 1;

switch(value)
{
case 1: console.log("The value is 1");break;
case 2: console.log("The value is 2");break;
default : console.log("Invalid")
}

in above case, conditions are 1 and 2. and the expression is the value of the variable value. since, the value of switch expression is 1 then the case with same value get executed that is it will pring ==> The value is 1.

SECOND CASE:

const score = 29;

switch(true){
case score>=80 && score <=100 : console.log("CONGRATULATIONS, you have obtained Grade A");break;
case score >=70 && score <=79: console.log("CONGRATULATIONS, you have obtained GRADE B"); break;
case score >=50 && score<=69: console.log("CONGRATULATIONS, you have obtained GRADE C");break;
case score>=0 && score<=49: console.log("CONGRATULATIONS, you have obtained Grade D");break;
default: console.log(""invalid scre);
}

In above case, conditions are score>=80 && score <=100 which returns the boolean value either true or false. So, if the value of the condition and expression matches then the statement get executed. So, according to above conditions if the conditons value is true then the statement relative to the condition need to be executed

# Day - 47 : HTML,CSS

=> heading tags ===> h1,h2,h3,h4,h5.h6 [<h1></h1>]
=> paragraph tag => p [<p></p>]
=> link tag => a [<a href="link where to redirect"></a>]
=> division => div (used for block level organisation and styling of the page elements) <div></div>
=> span => (used for inline organisation and styling) <div><spann></span></div>
=> image tag => img (used to embed an image into html page) [<img src="image.jpg" alt="Girl in a jacket" width="500" height="600">]

       1. src => Specifies the path to the image
       2. alt => Specifies the alternate text for the image, if the image for some reason cannot be displayed
       3. width and height => to specifies how big image should be shown in the page

=> tables

        <table>
            <tr>
                <th>heading 1 </th>
                <th>headig 2</th>
            </tr>
            <tr>
                <td>data 1 </th>
                <td>data 2</th>
            </tr>
        </table>

    tr => creates row of the table
    th => specifies the heading of the table
    td => soecifies the data

=> list (ul,ol,li)
=> audio
=> video
=> form

# Day - 47 - HTML, CSS

# Day - 48 - HTML Form

# Day - 49 - HTML , Javascritp

# Day - 50 - HTML , CSS with Bootstrap

# Day - 51 : HTML Bootstrp Form(Login and Registration)

=> Pages need to be built

==> For guest

    - login
    - RegisterS
    - Forget Password
    - Verify Password
    - Home
    - Bookmark
    - Blog list
    - Blog Details
    - Search
    - Aboout us
    - contact us

==> For user/ admin

    - Add Blog
    - Blog list
    - Blog Edit
    - Add User
    - User list (Admin only)
    - User Edit (Admin only)
    - Profile
    - Setting

# Day - 53 : Home page design
