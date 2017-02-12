# delay-req
Nodejs lib to delay each http request  in expressjs










## Installation 

> npm i delay-req -S

## Usage 

Please refer to [examples](https://github.com/AkashBabu/delay-req/tree/master/examples)

## Function

**timeout(options)**

*options*  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*delay* - specifies the amount of the delay to be applied for each request  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*maxPendingReq* - specifies the maximum number of pending requests that are allowed before sending error response  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*errStatus* - status code to be sent in case the maximum number of pending request limit has been crossed  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*errMsg* - error message to sent along with error status code  

## License

MIT