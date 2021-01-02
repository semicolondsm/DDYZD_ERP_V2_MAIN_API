# deploy ddyzd erp main api 

cd ~/DDYZD_ERP_V2_MAIN_API/

echo "git pull.."
git pull 

echo "stop server"
npm stop 

echo "typescript build"
npx tsc 

echo "restart server"
npm run start:prod