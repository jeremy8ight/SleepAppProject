import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    backgroundColor: 'white',
    height: '100%'
  },
  dashboardItems: {
    alignSelf: 'center',
  },
  logoName: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginBottom: 40,
  },
  dashboardActivityIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
  },
  inputTextSignIn: {
    height: 50,
    width: '100%',
    color: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  loginBtn: {
    width: 350,
    backgroundColor: 'purple',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  memberDetailBackBtn: {
    width: 100,
    backgroundColor: 'purple',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  helpButton: {
    width: 50,
    backgroundColor: 'purple',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  logoutBtn: {
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signOutButton: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 200,
    height: 50,
    borderRadius: 30,
  },
  signOutText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 15,
    marginHorizontal: 70,
  },
  signInErrorText: {
    color: 'red',
    fontSize: 20,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingHeader: {
    fontSize: 25,
    fontWeight: '800',
    alignSelf: 'center',
  },
  loadingHeaderButtons: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  dashboardLoadingSpinnerTextStyle: {
    fontSize: 35,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  sectionHeaderViewStyle: {
    width: '100%',
    backgroundColor: 'white'
  },
  listRowTouchableOpacity: {
    borderWidth: 3,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderRadius: 15,
    paddingVertical: 8,
    shadowOpacity: 0.2,
    marginHorizontal: 10,
  },
  listRowInsideStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 45,
    left: 10,
  },
  listRowImage: {
    height: 50,
    width: 50,
    top: 30,
    bottom: 3,
  },
  memberDataHeartBeat: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(254, 254, 254)',
      padding: 8,
  },
  memberTimeDetailsButtons: {
    bottom: 150,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '10%',
    backgroundColor: 'white'
  },
  moreDataDetailsButtons: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '4.4%',
    backgroundColor: 'white'
  },
  familyMemberSelectionButtons: {
    bottom: 150,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '10%',
    backgroundColor: 'white'
  },
  resultsTopView: {
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  resultsTimeText: {
    textAlign: 'center',
    fontSize: 15
  },
  resultsAnimationHeart: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'purple'
  },
  resultsHRText: {
    paddingTop: 10,
    fontSize: 30,
    paddingRight: 25
  },
  heartImage: {
    height: 50,
    width: 50,
    top: 30,
    right: 40,
    bottom: 3
  },
  heartTextAvgText: {
    fontSize: 30,
    paddingLeft: 50,
    bottom: 15
  },
  scoresTopView: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'purple'
  },
  scoresTitleText: {
    paddingTop: 30,
    fontSize: 30,
    paddingRight: 30
  },
  sleepyFaceImage: {
    height: 50,
    shadowOpacity: 0,
    width: 50,
    top: 40,
    right: 40,
    bottom: 3
  },
  scoreRatingText: {
    fontSize: 30,
    paddingLeft: 20,
    bottom: 2
  },
  roomTempTopView: {
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  roomTempAnimatedView: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'purple'
  },
  roomTempTitleText: {
    paddingTop: 30,
    fontSize: 30,
    paddingRight: 25
  },
  roomTempImage: {
    height: 50,
    width: 50,
    top: 20,
    right: 40,
    bottom: 3
  },
  roomTempResultsText: {
    fontSize: 30,
    paddingLeft: 50,
    bottom: 20
  },
  respiratoryRateTopView: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'purple'
  },
  respiratoryRateTitleText: {
    paddingTop: 30,
    fontSize: 30,
    paddingRight: 15
  },
  respiratoryRateImage: {
    height: 50,
    shadowOpacity: 0,
    width: 50,
    top: 20,
    right: 40,
    bottom: 3
  },
  respiratoryResultsText: {
    fontSize: 30,
    paddingLeft: 50,
    bottom: 20
  },
  sleepStageTitle: {
    textAlign: 'center',
    fontSize: 25
  },
  pieChartAnimationTopView: {
    borderColor: 'purple',
    borderWidth: 3,
    marginHorizontal: 20,
    top: 10,
    borderRadius: 20
  },
  moreDataButtons: {
    bottom: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '8%',
    backgroundColor: 'white'
  },
  moreDataTime: {
    textAlign: 'center',
    fontSize: 15
  },
  moreDataTempBedTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 15
  },
  moreDataTossTurnsTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 15
  },
  modalContainer: {
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 30,
  }
});
