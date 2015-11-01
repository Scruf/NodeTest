
var temp = process.argv.slice(1);
arr = [];
for(var i in temp)
{
	arr.push(parseInt(i));
}
var sum = 0;

for(var i=1;i<arr.length;i++){
	sum+=arr[i];
}
console.log(sum);
