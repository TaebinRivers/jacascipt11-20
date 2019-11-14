//problem 1: firstLast6

function firstLast6(arr) {

    var arrayFirst = arr[0];
    var arrayLast = arr[arr.length - 1];
    if(arrayFirst == 6 || arrayLast == 6) {

        return true;

    }else{

        return false;

    }

}

//problem 2: has_23

function has23(arr) {

    if(arr.length == 2) {

        if(arr[0] == 2 || arr[1]  ==  2) {

            return true;

        }

        if(arr[0] == 3 || arr[1] == 3) {

            return true;

        } else {

            return false;

        }


    }

}


// problem 3: fix 23

function fix23(arr) {

    if(arr[0] == 2 && arr[1] == 3) {

        arr[1] = 0;

    }
    if(arr[1] == 2 && arr[2] == 3) {

        arr[2] = 0;

    }

}

function countYZ(str) {
    var count = 0;
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i++) {


        if(str[i] == ' ' && str[i-1] == 'y') {

            count+=1;

        }
        if(str[i] == ' ' && str[i-1] == 'z') {

            count+= 1;

        }

    }
    var lastOne = str.length - 1;
    if(str[lastOne] == 'y') {

        count += 1;

    }
    if(str[lastOne] == 'z') {

        count += 1;

    }

    return count;

}

//problem 5 endOther

function endOther(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    var strOneLength = str1.length;
    var strTwoLength = str2.length;
    if(strOneLength > strTwoLength) {

        if (str1.substring(strOneLength - strTwoLength , strOneLength ) == str2) {

            return true;

        }

    }
    if(strTwoLength > strOneLength) {

        if(str2.substring(strTwoLength - strOneLength , strTwoLength ) == str1) {

            return true;

        }

    }
    if(strOneLength == strTwoLength) {

        if(str1 == str2) {

            return true;

        }else {

            return false;

        }
    } else {

        return false;

    }



}

//ptoblem 6:starOut

function starOut(str) {
    var nStr = '';

    for(var i = 0; i < str.length; i++) {

      if(str[i] != '*' && str[i-1] != '*' && str[i+1] != '*') {

          nStr += str[i];
}

    }

    return nStr;

}

//function 7: get sandwich
function getSandwich(str) {


    var nStr = '';

    var firstIndex = str.indexOf('bread');
    var lastIndex = str.lastIndexOf('bread');

    nStr = str.substring(firstIndex + 5, lastIndex);
    if(lastIndex == firstIndex) {

        nStr = '';

    }


    return nStr;



}

//function 8: can Balance
function canBalance(arr) {
    var sum1 = 0;

    if(arr.length == 1) {

        return false;

    }

    for(var i = 0; i < arr.length; i++){

        sum1 += arr[i];
        var sum2 = 0;

        //the second part
        for(var j = i + 1; j < arr.length; j++) {
            sum2 += arr[j];




        }
        if(sum1 == sum2) {

            return true;

        }



    }
    return false;

}

//function 9:countClumps
function countClumps(arr) {

    var numberOfClumps = 0;

        for(var j = 1; j < arr.length; j++) {

            if(arr[j-1] == arr[j] && arr[j] != arr[j+1]) {

                numberOfClumps += 1;

            }

        }


    return numberOfClumps;

}

//function 10:evenly spaced
function evenlySpaced(a, b, c) {

    var large = Math.max(a,b,c);
    var small = Math.min(a,b,c);

    if(large == a && small == b) {

        var medium = c;

    }else if(large == a && small == c) {

        var medium = b;

    }else if(large == b && small == c) {

        var medium = a;

    }else if(large == b && small == a) {

        var medium = c;

    }else if(large == c && small == a) {

        var medium = b;

    }else if(large == c && small == b) {

        var medium = a;

    }
    if(large - medium == medium - small) {

        return true;

    }else {

        return false;

    }

}


//examples

function tester() {
    document.getElementById("output").innerHTML += firstLast6(1, 3, 3, 4, 5, 6, 6, 6, 7);
    document.getElementById("output").innerHTML += has23(1, 3);
    document.getElementById("output").innerHTML += fix23(1,2,3);
    document.getElementById("output").innerHTML += countYZ(hello);
    document.getElementById("output").innerHTML += endOther(hello, ello);
    document.getElementById("output").innerHTML += starOut(hee*lllo);
    document.getElementById("output").innerHTML += getSandwich(shhhbreadjamisbadbreadll);
    document.getElementById("output").innerHTML += canBalance(1,2,3,3,3,3,3,3,3);
    document.getElementById("output").innerHTML += countClumps(1,1,2,3,3,4,5,6,6,3);
    document.getElementById("output").innerHTML += evenlySpaced(2,4,6);
}
