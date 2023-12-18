export default function handler(d,o){
    if (d.method == 'POST'){ 
        return o.status(200).json("처리완료")
    }
}