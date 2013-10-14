/**
 * Created with JetBrains WebStorm.
 * User: shenlixia01
 * Date: 13-5-8
 * Time: 下午4:36
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs'),
    path = require('path');
var fis = require('../../fis-kernel.js');
var  _ = fis.util,
    config = fis.config;
var expect = require('chai').expect;

function buf2arr(buf) {
    return Array.prototype.slice.call(buf);
}

describe('_.isUtf8 2', function () {
    it('u8', function () {

        var bytes = buf2arr(fs.readFileSync(__dirname+'/util/encoding/tmp.txt'));
        console.log("------------------------------------------")
        var str = (new Buffer([0xF0, 0x90, 0x80])).toString('utf8');
        var buf = new Buffer([0xF0, 0x90, 0x80]);
        expect(_.isUtf8(buf2arr(bytes))).to.be.true;


    });

});
