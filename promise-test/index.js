const fs = require('fs')
const path = require('path')

//  promise 写法
function getFileContent(fileName){
	const promise = new Promise((resolve, reject)=>{
		const fullFileName = path.resolve(__dirname, 'files', fileName)
		fs.readFile(fullFileName, (err, data)=>{
			if(err){
				reject(err)
				return
			}
			resolve(
				JSON.parse(data.toString())
			)
			console.log(data.toString())
		})
	})
	return promise;
}

getFileContent('a.json').then(adata=>{
	console.log("a.data", adata)
	return getFileContent(adata.next)
}).then(bdata=>{
	console.log("b.data", bdata)
	return getFileContent(bdata.next)
}).then(cdata=>{
	console.log("c.data", cdata)
}).catch(err => {
	console.log(err)
})

// 回调写法
// function getFileContent(fileName, callback){
// 	const fullFileName = path.resolve(__dirname, 'files', fileName)
// 	fs.readFile(fullFileName, (err, data)=>{
// 		if(err){
// 			console.log(err)
// 			return
// 		}
// 		callback(
// 			JSON.parse(data.toString())
// 		)
// 		console.log(data.toString())
// 	})
// }

// // 测试
// getFileContent('a.json', adata=>{
// 	console.log("a.data", adata)
// 	getFileContent(adata.next, bdata=>{
// 		console.log("b.data", bdata)
// 		getFileContent(bdata.next, cdata=>{
// 			console.log("c.data", cdata)
// 		})
// 	})
// })


