
const opcodes = {
	stop: 	'00',
	add:  	'01',
	mul:  	'02',
	sub:  	'03',
	div:  	'04',
	sdiv:	'05',
	mod:	'06',
	smod:	'07',
	addmod: '08',
	mulmod: '09',
	exp:	'0a',
	signextend: '0b',
	
	lt:		'10',
	gt:		'11',
	slt:	'12',
	sgt:	'13',
	eq:		'14',
	iszero:	'15',
	and:	'16',
	or:		'17',
	xor:	'18',
	not:	'19',
	byte:	'1a',
	shl:	'1b',
	shr:	'1c',
	sar:	'1d',
	
	sha3:	    '20',
	keccak256:	'20',
	
	address:    '30',
	balance:    '31',
	origin:	    '32',
	caller:	    '33',
	callvalue:	'34',
	calldataload:	'35',
	calldatasize:	'36',
	calldatacopy:	'37',
	codesize:	'38',
	codecopy:	'39',
	gasprice:	'3a',
	extcodesize:	'3b',
	extcodecopy:	'3c',
	returndatasize:	'3d',
	returndatacopy:	'3e',
	
	blockhash:	'40',
	coinbase:	'41',
	timestamp:	'42',
	number:		'43',
	difficulty:	'44',
	gaslimit:	'45',
	
	pop:	'50',
	mload:	'51',
	mstore:	'52',
	mstore8:	'53',
	sload:	'54',
	sstore:	'55',
	jump:	'56',
	jumpi:	'57',
	pc:		'58',
	msize:	'59',
	gas:	'5a',
	jumpdest:	'5b',
	
	create:	'f0',
	call:	'f1',
	callcode:	'f2',
	return:	'f3',
	delegatecall:   'f4',
    create2:    'f5',
	staticcall:	'fa',
	revert: 'fd',
	invalid: 'fe',
	selfdestruct:   'ff'
}

for (let k = 1; k <= 32; k++) {
	const opcode = 'push' + k;
	const compiled = (0x60 + k - 1).toString(16).toLowerCase();

	opcodes[opcode] = compiled;
}

for (let k = 1; k <= 16; k++) {
	const opcode = 'dup' + k;
	const compiled = (0x80 + k - 1).toString(16).toLowerCase();

	opcodes[opcode] = compiled;
}

for (let k = 1; k <= 16; k++) {
	const opcode = 'swap' + k;
	const compiled = (0x90 + k - 1).toString(16).toLowerCase();

	opcodes[opcode] = compiled;
}

for (let k = 0; k <= 4; k++) {
	const opcode = 'log' + k;
	const compiled = (0xa0 + k).toString(16).toLowerCase();

	opcodes[opcode] = compiled;
}

function compile(text) {
	return opcodes[text.toLowerCase()];
}

function define(code, bytecode) {
	opcodes[code.toLowerCase()] = bytecode;
}

module.exports = {
	compile: compile,
	define: define
}

