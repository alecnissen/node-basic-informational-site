// import http from 'http';
// import fs from 'fs/promises';
// const PORT = 8800;

// const server = http.createServer((req, res) => { 

// try { 
//     if (req.method === 'GET') { 
//         if (req.url === '/') { 
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end('<h1>Index</h1>');
//         } else if (req.url === '/about') { 
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end('<h1>About</h1>');
//         } else { 
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.end('<h1>404</h1>');
            
//         }
//     } else { 
//         throw new Error('Method not allowed');
//     }
// } catch (error) { 
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Server Error');
// }
// });

// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });








// 2nd option 

// import http from 'http';
// import fs from 'fs/promises'; 

// http.createServer((req, res) => { 
//     res.writeHead(200, {'Content-Type' : 'text.html'});
//     if (req.url=='/') { 
//         let readStream = fs.createReadStream('index.html');
//     } else if (req.url =='/about') { 
//         let readStream = fs.createReadStream('about.html');
//     } else if (req.url == '/contact-me') { 
//         let readStream = fs.createReadStream('contact-me.html');
//     } else { 
//         let readStream = fs.createReadStream('404.html')
//     }
//     readStream.pipe(res)
// }).listen(8080);


// 3rd option 

import http from 'http';
import fs from 'fs/promises';

const server = http.createServer((req, res) => { 

    console.log('Requested URL:', req.url);

    if (req.url === '/') { 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', 'utf-8').then(data => { 
            res.end(data)
        }).catch(err => { 
            res.writeHead(500);
            res.end('Error loading page');
        })
        
    } else if (req.url === '/about') { 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('about.html', 'utf-8').then(data => { 
            res.end(data)
        }).catch(err => { 
            res.writeHead(500);
            res.end('Error loading page');
        })
        
    } else if (req.url === "/contact-me") { 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('contact-me.html', 'utf-8').then(data => { 
            res.end(data)
        }).catch(err => { 
            res.writeHead(500);
            res.end('Error loading page');
        })
    } else { 
        res.writeHead(404);
        fs.readFile('404.html', 'utf-8').then(data => { 
            res.end(data)
        }).catch(err => { 
            res.writeHead(500);
            res.end('Error loading page');
        })
    }
});

server.listen(3000, () => { 
    console.log('Server running on port 3000');
});









// // import http from 'http'; // Importing the built-in Node.js module 'http', which provides functionality for creating HTTP servers and handling HTTP requests and responses.
// // import fs from 'fs/promises'; // Importing the built-in Node.js module 'fs' with promises API enabled, which provides functionality for interacting with the file system using promises.

// const server = http.createServer((req, res) => { 
//     // Creating an HTTP server using the 'createServer' method of the 'http' module. This method takes a callback function as an argument, which will be executed whenever a request is received.
    
//     console.log('Requested URL:', req.url); // Logging the requested URL to the console. This helps in debugging and understanding the flow of requests.

//     if (req.url === '/') { // Checking if the requested URL is the root URL ('/'). If true, serve 'index.html'.
//         res.writeHead(200, { 'Content-Type': 'text/html' }); // Setting the HTTP status code to 200 (OK) and specifying the content type of the response as HTML.
//         fs.readFile('index.html', 'utf-8').then(data => { // Reading the content of the 'index.html' file asynchronously using promises. If successful, send the file content as the response. If an error occurs, handle it by setting the status code to 500 (Internal Server Error) and sending an error message.
//             res.end(data); // Sending the file content as the response.
//         }).catch(err => { 
//             res.writeHead(500); // Setting the HTTP status code to 500 (Internal Server Error).
//             res.end('Error loading page'); // Sending an error message as the response.
//         })
//     } else if (req.url === '/about') { // Checking if the requested URL is '/about'. If true, serve 'about.html'.
//         res.writeHead(200, { 'Content-Type': 'text/html' }); // Setting the HTTP status code to 200 (OK) and specifying the content type of the response as HTML.
//         fs.readFile('about.html', 'utf-8').then(data => { // Reading the content of the 'about.html' file asynchronously using promises. If successful, send the file content as the response. If an error occurs, handle it by setting the status code to 500 (Internal Server Error) and sending an error message.
//             res.end(data); // Sending the file content as the response.
//         }).catch(err => { 
//             res.writeHead(500); // Setting the HTTP status code to 500 (Internal Server Error).
//             res.end('Error loading page'); // Sending an error message as the response.
//         })
//     } else if (req.url === "/contact-me") { // Checking if the requested URL is '/contact-me'. If true, serve 'contact-me.html'.
//         res.writeHead(200, { 'Content-Type': 'text/html' }); // Setting the HTTP status code to 200 (OK) and specifying the content type of the response as HTML.
//         fs.readFile('contact-me.html', 'utf-8').then(data => { // Reading the content of the 'contact-me.html' file asynchronously using promises. If successful, send the file content as the response. If an error occurs, handle it by setting the status code to 500 (Internal Server Error) and sending an error message.
//             res.end(data); // Sending the file content as the response.
//         }).catch(err => { 
//             res.writeHead(500); // Setting the HTTP status code to 500 (Internal Server Error).
//             res.end('Error loading page'); // Sending an error message as the response.
//         })
//     } else { // If the requested URL does not match any of the specified routes, serve '404.html'.
//         res.writeHead(404); // Setting the HTTP status code to 404 (Not Found).
//         fs.readFile('404.html', 'utf-8').then(data => { // Reading the content of the '404.html' file asynchronously using promises. If successful, send the file content as the response. If an error occurs, handle it by setting the status code to 500 (Internal Server Error) and sending an error message.
//             res.end(data); // Sending the file content as the response.
//         }).catch(err => { 
//             res.writeHead(500); // Setting the HTTP status code to 500 (Internal Server Error).
//             res.end('Error loading page'); // Sending an error message as the response.
//         })
//     }
// });

// server.listen(3000, () => { 
//     console.log('Server running on port 3000'); // Logging a message to indicate that the server is running.
// });

