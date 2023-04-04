import datetime
import hashlib
import json
from flask import Flask, jsonify


class BasicBlockChain:
    def __init__(self):
        self.chain = []
        self.createBlock(1, 0)

    def createBlock(self, current, previous):
        block = {'index': len(self.chain) + 1,
                 'timestamp': str(datetime.datetime.now()),
                 'proof': current,
                 'previous_hash': previous}
        self.chain.append(block)
        return block

    def printPreviousBlock(self):
        return self.chain[-1]

    def proof_of_work(self, previous_proof):
        new_proof = 1
        check_proof = False

        while check_proof is False:
            hash_operation = hashlib.sha256(
                str(new_proof**2 - previous_proof**2).encode()).hexdigest()
            if hash_operation[:5] == '00000':
                check_proof = True
            else:
                new_proof += 1

        return new_proof


blockchain = BasicBlockChain()

previousBlock = blockchain.printPreviousBlock()
previousProof = previousBlock['proof']


print(previousBlock, previousProof)
