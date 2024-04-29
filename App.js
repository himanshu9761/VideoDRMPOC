import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video, {DRMType} from 'react-native-video';
const App = () => {
  const [drm_authTokenm, setdrm_authToken] = useState();

  //   useEffect(() => {
  //     getSignedLicenseURL();
  //   }, []);
  //   const getSignedLicenseURL = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://tataplay.live.ott.irdeto.com/Widevine/getlicense?CrmId=tatasky&AccountId=tatasky&ContentId=400000732&ls_session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNvbnRyb2xfc2lnbmluZ19rZXlfcHJvZHVjdGlvbl8xNjkyMjk1MDk4NjMxIn0.eyJzdWIiOiIxMDYwOTU0MzAwIiwiaXNlIjp0cnVlLCJqdGkiOiI3ZTY0Mzg4OC1mNDhhLTQwYTktYTUyOS1mZTljNDNjZDkyOTgiLCJhaWQiOiJ0YXRhc2t5IiwiZXhwIjoxNzEyMTU0MzU2LCJuYW1lIjoiVGF0YSBTa3kgTGltaXRlZCIsImlhdCI6MTcxMjEzOTk1NiwiZW50IjpbeyJiaWQiOiIxMDAwMDAxMjgwIiwiZXBpZCI6IlN1YnNjcmlwdGlvbl9Nb2JpbGVfU3RyZWFtaW5nIn1dLCJjc21vIjp7Im1hcyI6IjYiLCJkdCI6InRwbWEiLCJtYXNkIjoiMiJ9LCJpc3MiOiJ0cG1hX2FuZHJvaWQifQ.oG8SoBBubvD8q9bxZbolg9l3Z-j5DfYwiWoz1Fd8B04',
  //       );
  //       console.log(response);
  //       const json = await response.json();
  //       console.log(json);
  //       //  setSignedLicenseURL(json.licence);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <View style={styles.main}>
      {/* <Text>Hello World</Text> */}
      <View
        style={{
          height: 200,
          width: '100%',
          borderWidth: 1,
          borderColor: '#fff',
        }}>
        <Video
          source={{
            uri: 'https://bplab1linear.akamaized.net/bpk-tv/irdeto_com_Channel_191/output/index.m3u8',
            type: 'm3u8',
          }}
          drm={{
            type: DRMType.FAIRPLAY,
            certificateUrl:
              'https://tatasky.stage.ott.irdeto.com/Streaming/getCertificate?accountId=tatasky&applicationId=tatasky',
            licenseServer:
              'https://tataplay.stage.ott.irdeto.com/streaming/getckc?CrmId=tatasky&AccountId=tatasky&ContentId=400000171&KeyId=0b402fe0-ba65-5bf1-8eb3-eaecf801b2e2&ls_session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNvbnRyb2xfc2lnbmluZ19rZXlfdWF0XzE2OTE2NjU1MTc0MjYifQ.eyJzdWIiOiIzMDAxMDM0MDc3IiwiaXNlIjp0cnVlLCJqdGkiOiIzNjJlOGNlNC1lNDA1LTQ5YWUtYmIyMC0wMzMyNzg5ODZkNmYiLCJhaWQiOiJ0YXRhc2t5IiwiZXhwIjoxNzEyNjY2NzM2LCJuYW1lIjoia0lTSE9SRWJJTkdFVUFUIiwiaWF0IjoxNzEyNjYzMTM2LCJlbnQiOlt7ImJpZCI6IjEwMDAwMDEwODkiLCJlcGlkIjoiU3Vic2NyaXB0aW9uX01vYmlsZV9TdHJlYW1pbmcifV0sImNzbW8iOnsibWFzIjoiNiIsImR0IjoidHBtYSIsIm1hc2QiOiIzIn0sImlzcyI6InRwbWFfaW9zIn0.eIxgcuOuGkMpYGm7tBYWCUX18WkmGMWU8ruwr-fBDk0',
            base64Certificate: false,
            getLicense: spcString => {
              console.log('spc>>>>', spcString);
              const base64spc = Base64.encode(spcString);
              const formData = new FormData();
              formData.append('spc', base64spc);
            },
            // licenseServer:
            //   'https://tataplay.stage.ott.irdeto.com/Widevine/getlicense?CrmId=tatasky&AccountId=tatasky&ContentId=400000171&ls_session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNvbnRyb2xfc2lnbmluZ19rZXlfdWF0XzE2OTE2NjU1MTc0MjYifQ.eyJzdWIiOiIzMDAxMzk5NTQ2IiwiaXNlIjp0cnVlLCJqdGkiOiJmODdmMmRlMC01NjZkLTQ2NDAtODY2Yy02MTlmN2NjMzMyZmYiLCJhaWQiOiJ0YXRhc2t5IiwiZXhwIjoxNzEyNTYxMzAyLCJuYW1lIjoiQW5jZmcgQm90aCIsImlhdCI6MTcxMjU1NzcwMiwiZW50IjpbeyJiaWQiOiIxMDAwMDAwMTA4IiwiZXBpZCI6IlN1YnNjcmlwdGlvbl9Nb2JpbGVfU3RyZWFtaW5nIn1dLCJjc21vIjp7Im1hcyI6IjYiLCJkdCI6InRwbWEiLCJtYXNkIjoiMyJ9LCJpc3MiOiJ0cG1hX2FuZHJvaWQifQ.jQRVALc4ul0LW47RE9AhNd1il-6FyCxGOFwzrS9UPis',
          }}
          onError={e => console.log(e)}
          style={styles.backgroundVideo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default App;
