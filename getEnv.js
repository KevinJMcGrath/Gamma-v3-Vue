//http://gunargessner.com/gcloud-env-vars/
'use strict'

const fs = require('fs');


const dotEnvExists = fs.existsSync('.env');
if(dotEnvExists)
{
	console.log('getEnv.js: .env exists - probably running dev');		
}
else
{
	const gcs = require('@google-cloud/storage')();

	//Need to create a bucket called "envvars.<GCP_PROJECT>.gamma-self-service"
	const bucketName = 'envvars-gamma-${process.env.GCLOUD_PROJECT}';

	gcs
		.bucket(bucketName)
		.file('.env')
		.download({ destination: '.env'})
		.then(() => {
			console.info('getEnv.js: .env downloaded successfully');
		})
		.catch(e => {
			console.error('getEnv.js: There was an error - ${JSON.stringify(e, undefined, 2)}');
		});
}	
