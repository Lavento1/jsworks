        var x = 1;
        var y = 2;
        var temp;

        document.write("<br>----변수 교환 전----<br>")
        document.write("x = " + x + ", y = " + y + "<br><hr>");
        
        temp = x;
        x = y;
        y = temp;
        
        document.write("----변수 교환 후----<br>")
        document.write("x = " + x + ", y = " + y + "<br>");