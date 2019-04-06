import { Component, ɵConsole } from '@angular/core';
import * as Terminal from 'xterm/dist/xterm';
import * as ssh2 from 'ssh2';



@Component({
  templateUrl: './privateSettingsHomeComponent.html'  
})
export class privateSettingsHomeComponent { 

  private term: any;

  ngOnInit() {     
    // this.connect_via_shh();
    this.term = new Terminal();
    this.term.open(document.getElementById('terminal'));
    this.term.prompt = () => {
      this.term.write('\r\n$ ');
    };

    this.term.writeln('Welcome to xterm.js');    
    this.term.prompt();
    var tmpData = "";
    this.term.on('key', (key, ev) => {
      console.log("event on");
      const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {                                              
        this.term.prompt();      
        this.runCommand(tmpData); 
        tmpData = "";                   
      } else if (ev.keyCode === 8) {        
        if (this.term._core.buffer.x > 2) {       
          tmpData = tmpData.slice(0,tmpData.length - 1)                           
          this.term.write('\b \b');
        }
      } else if (printable) {        
        tmpData += key;            
        this.term.write(key);
      }
    });
  } 

  connect_via_shh(){      
    var Client = ssh2.Client;
 
    var conn = new Client();
    conn.on('ready', function() {
      console.log('Client :: ready');
      conn.exec('uptime', function(err, stream) {
        if (err) throw err;
        stream.on('close', function(code, signal) {
          console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
          conn.end();
        }).on('data', function(data) {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
      });
    }).connect({
      host: 'chiron.uberspace.de',
      port: 22,
      username: 'phase7',
      password: 'a5MVsu693'
    });
  }

  runCommand(cmd){
    console.log(cmd);      
    this.term.write("Echo: " + cmd);
    this.term.prompt();
  }
}