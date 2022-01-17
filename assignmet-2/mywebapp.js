
<!DOCTYPE html>
<head>
    <script type = "text/javascript">  
       async function generateRandom(){   
          var input = document.getElementById("number").value
          var list_parent = document.getElementById('list_parent');
          var list = document.createElement('ol'); 

          var url = 'https://sijaroc73k.execute-api.eu-west-3.amazonaws.com/default/lambda'+input
          fetch(url)
          .then(res => res.json())
          .then((out) => { 
                      
              
              for (let i=0; i <parseInt(input); i++){ 
                    var entry = document.createElement('li');
                    entry.appendChild(document.createTextNode(out[i]));
                    list.appendChild(entry);
              }
            list_parent.innerHTML ='';
            list_parent.appendChild(list);
}).catch(err => console.error(err));
}
        


