    // scroll down for ES6 features. 
    myBooks = null


    function ChangeHtml(html) {
        $(".json_test").html(html)
    }

    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        //.then(data => ChangeHtml(JSON.stringify(data)))
        .then(data => tableFromJson(data))
    // using regular methods.

    function tableFromJson(myBooks) {
        // https://jsonplaceholder.typicode.com/todos

        // console.log("myBooks ", myBooks )


        // the json data. (you can change the values for output.)
        // var myBooks = [
        //     {'Book ID': '1', 'Book Name': 'Challenging Times',
        //     'Category': 'Business', 'Price': '125.60'
        //     },
        //     {'Book ID': '2', 'Book Name': 'Learning JavaScript',
        //     'Category': 'Programming', 'Price': '56.00'
        //     },
        //     {'Book ID': '3', 'Book Name': 'Popular Science',
        //     'Category': 'Science', 'Price': '210.40'
        //     }
        // ]

        // Extract value from table header. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);     
        
    }