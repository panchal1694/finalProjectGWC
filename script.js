const mains=["deep dish pizza", "detroit pizza", "roma pizza" , "sicily pizza" , "NY SPECIAL PIZZA" , "poland pizza" , "lahmacun pizza"] ; //lahmacun is french

        var mainorder="";

        const sides =["lasagna" , "zucchini salad" , "tomato cucumber onion salad" , "cheesy fries" , "caesar salad with garlic butter crumbs" , "garlic breadsticks" , "normal salad"] ;

        var sideorder="";

        var costmaindishes=[20, 25, 20, 30, 25, 30,25]

        var costsides=[13,8,9 , 10,15,14,8]

        var costbevs=[15, 20 , 25, 15,12,13,13]

        const mocktails =["Cranberry Rosemary Herb Soda" , "Lemon Basil Soda " , "Sparkling Strawberry Cucumber Mocktail " , " Fizzy Basil Lemonade Mocktail" , "Jasmine Tea Mocktail" , "Spiced Minty Mango Mocktail", "Cranberry sangria"] ;

        var mocktailorder=""

        var ordermain=[];

        var orderside=[];

        var orderbev=[];

        var d = "";

        var f="";

        var g="";

        var total=0;

        var stotal=0;

        var tip=0;

        var cost=0

        var tipa=0

        var paid=0

        var change =0









        function showfood(){
            //goal is to put all 10 names from groupA to be stored in the groupANames and displayed on screen in id="a"
            //same thing for groupB in id=b
            //use this idea to populate the entire menu on your webpage

            for ( i=0;i<7;i++){
                mainorder=mainorder + (i+1) + "." + mains[i] + "<br>";
                document.getElementById("mainss").innerHTML=mainorder;

                sideorder=sideorder + (i+1) + "." + sides[i] + "<br>";
                document.getElementById("side").innerHTML=sideorder;

                mocktailorder=mocktailorder + (i+1) + "." + mocktails[i] + "<br>";
                document.getElementById("bev").innerHTML=mocktailorder;





            }
        }

        function createmain(){
             ordermain=1
            while (ordermain-1!=-1){
                ordermain=prompt("pick your main dishes");
                if (ordermain-1!=-1){

                    d= d + mains[ordermain-1] + " " + costmaindishes[ordermain-1] + "$" + "<br>";

                    document.getElementById("a").innerHTML=d;

                    cost=cost+costmaindishes[ordermain-1]

                }

            }

        }

        function createsides() {
            orderside = 1
            while (orderside-1!=-1) {

                orderside = prompt("pick your side dishes");
                if (orderside - 1 != -1) {

                    f = f + sides[orderside - 1] + " " + costsides[orderside - 1] + "$" + "<br>";

                    document.getElementById("b").innerHTML = f;
                    cost=cost+costsides[orderside-1]
                }

            }
        }
            function createbevs(){
                orderbevs=1
                while (orderbevs-1!=-1){
                    orderbevs=prompt("pick your mocktails");
                    if (orderbevs-1!=-1){

                        g= g + mocktails[orderbevs-1] + " " + costbevs[orderbevs-1] + "$" + "<br>";
                        document.getElementById("c").innerHTML=g
                        cost=cost+costbevs[orderbevs-1]
                    }

                }
                stotal=cost+(cost/10)
                document.getElementById("subtotal").innerHTML="$" + stotal


            }



            function calctip() {

            tip=document.getElementById("inp").value;

            tipa=(tip/100)*stotal

            document.getElementById("tip").innerHTML=tipa;
            total=Number(tipa)+Number(stotal);
            document.getElementById("tot").innerHTML=total.toFixed(2);




            }

            function calcchange(){
            paid=document.getElementById("inp2").value;
            change=paid-total;
            document.getElementById("change").innerHTML=change.toFixed(2)+"$";
            }