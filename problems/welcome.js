exports.problem = `

Welcome to $ADVENTURE_COMMAND

In iojs-adventure-1, we will introduce you to the io.js api.

How it works:

  Each challenge will provide you a short
  lesson and then a challenge, in order
  to confirm the challenge, you simply run:
  $ADVENTURE_COMMAND verify FILE
  
  enter: [$ADVENTURE_COMMAND verify]
  
  To move to the first challenge
`;

exports.verify = function(args, cb){
  cb(true);
};

exports.solution = ['$ADVENTURE_COMMAND verify'];
