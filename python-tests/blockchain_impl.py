import datetime
import hashlib
import json
from flask import Flask, jsonify


class basicBlockChain:
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
