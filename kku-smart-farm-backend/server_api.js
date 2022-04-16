var express = require('express')
var cors = require('cors')
var app = express()
const fs = require('fs')

app.use(cors())
app.use(express.json())
// get the client

const mysql = require('mysql2');
const { response } = require('express');
var host = 'localhost';
if(process.env.NODE_ENV == 'production'){
    host = 'db'
}
// create the connection to database
const connection = mysql.createPool({
  host: host,
  user: 'root',
  password: '1q2w3e4r',
  database: 'special_topic',
  port : 9906
});

app.get('/', function (req, res, next) {
  console.log("200")
  res.end('Hello World \n');
  
})

app.post('/module', function (req, res, next) {
  const data =  req.body 
  const  temperature  = data['temperature']
  const humidity = data['humidity']
  const soil_moisture = data['soil_moisture']
  connection.query("INSERT INTO module (temperature, humidity, soil_moisture,date_module,time_module) VALUES (?,?,?,sysdate(), time(now()));",[temperature,humidity,soil_moisture],  function(err, results, fields) {
    res.json(results); // results contains rows returned by server
});
})

app.post('/updatewifi', function (req, res, next) {
  const {id_wifi,name_wifi,password_wifi,num_board} = req.body ;
  connection.query("UPDATE wifi SET name_wifi = ?, password_wifi = ?, num_board = ? WHERE id_wifi = ?"
  ,[name_wifi,password_wifi,num_board,id_wifi], function(err, results, fields) {
    res.json(results); // results contains rows returned by server
});
})

app.get('/wifi', function (req, res, next) {
  connection.query( 'SELECT * FROM wifi', function(err, results, fields) {
    res.json(results); // results contains rows returned by server
});
})

app.post('/updatesettingtemp', function (req, res, next) {
  const {timer_temp,id_status_temp,id_relay_temp} = req.body
  connection.query( 'UPDATE setting_temp SET timer_temp = ?, id_status_temp= ? WHERE id_relay_temp = ?',[timer_temp,id_status_temp,id_relay_temp], function(err, results, fields) {
    res.json(results); // results contains rows returned by server
});
})

app.post('/updatesettinghu', function (req, res, next) {
  const {timer_hu,id_status_hu,id_relay_hu} = req.body
  connection.query( 'UPDATE setting_hu SET timer_hu = ?, id_status_hu= ? WHERE id_relay_hu = ?',[timer_hu,id_status_hu,id_relay_hu], function(err, results, fields) {
    res.json(results); // results contains rows returned by server
});
})

app.post('/updatesettingsoil', function (req, res, next) {
  const {timer_soil,id_status_soil,id_relay_soil} = req.body
  connection.query( 'UPDATE setting_soil SET timer_soil = ?, id_status_soil= ? WHERE id_relay_soil = ?',[timer_soil,id_status_soil,id_relay_soil], function(err, results, fields) {
    res.json(results); // results contains rows returned by server
});
})

//--------------------//

app.get('/getmanaul', function (req, res, next) {
  connection.query(
      'SELECT id_relay_select, id_status_select, detail_status FROM `manual`',
      function(err, results, fields) {
          res.json(results); // results contains rows returned by server
      }
    );
 })

app.put('/manual', function (req, res, next) {
const {id_relay, id_status} = req.body;
connection.query(
      'UPDATE `manual` SET id_status_select=?, detail_status = (select st.status from status st where st.id_status=id_status_select) WHERE id_relay_select=?',[id_status , id_relay],
      function(err, results, fields) {
        res.json(results);
      }
    );
 })

app.get('/getauto', function (req, res, next) {
  connection.query(
      'SELECT id_auto,set_date,set_time,set_time_wrk FROM `auto`',
      function(err, results, fields) {
          res.json(results);
      }
    );
 })

app.post('/auto', function (req, res, next) {
const {set_date, set_time, set_time_wrk} = req.body;
connection.query('call auto_add_all(?,?,?)', [set_date, set_time, set_time_wrk],function(err, results, fields) {
  res.json(results); // results contains rows returned by server
});

})

//---------------------//
app.get('/dashboard', function (req, res, next) {
  console.log("A")
  const temperature = fs.readFileSync('./temperature.txt', 'utf8')
  console.log(temperature)
  const humidity = fs.readFileSync('./humidity.txt', 'utf8')
  console.log(humidity)
  const soil_moisture = fs.readFileSync('./soil_moisture.txt', 'utf8')
  console.log(soil_moisture)
  connection.query("INSERT INTO module (temperature, humidity, soil_moisture,date_module,time_module) VALUES (?,?,?,sysdate(), time(now()))",[temperature,humidity,soil_moisture],  function(err, results, fields) {
  });
  console.log("A")

  
  setTimeout(() => connection.query('SELECT temperature,humidity,soil_moisture FROM special_topic.module order by date_module DESC, time_module DESC LIMIT 1', function (err, results, fields) {
    res.json(results); // results contains rows returned by server
    console.log(results)

  }), 100)

  
})

app.get('/getsettingtemp', function (req, res, next) {
  connection.query('SELECT timer_temp,id_status_temp,id_relay_temp FROM special_topic.setting_temp', function (err, results, fields) {
    res.json(results); // results contains rows returned by server
    console.log(results)
  });
})

app.get('/getsettinghu', function (req, res, next) {
  connection.query('SELECT timer_hu,id_status_hu,id_relay_hu FROM special_topic.setting_hu', function (err, results, fields) {
    res.json(results); // results contains rows returned by server
  });
})

app.get('/getsettingsoil', function (req, res, next) {
  connection.query('SELECT timer_soil,id_status_soil,id_relay_soil FROM special_topic.setting_soil', function (err, results, fields) {
    res.json(results); // results contains rows returned by server
  });
})


//--------------------------/

app.get('/getsetrelay', function (req, res, next) {
    connection.query(
        'SELECT id_relay_set, id_status_sel, n_status FROM `set_relay`',
        function(err, results, fields) {
            res.json(results); // results contains rows returned by server
        }
      );
   })

app.put('/setrelay', function (req, res, next) {
  const {id_relay, id_status} = req.body;
  connection.query(
        'UPDATE `set_relay` SET id_status_sel=?, n_status = (select st.status from status st where st.id_status=id_status_sel) WHERE id_relay_set=?',[id_status , id_relay],
        function(err, results, fields) {
          res.json(results);
        }
      );
   })

app.listen(9000, function () {
  console.log('CORS-enabled web server listening on port 9000')
})


