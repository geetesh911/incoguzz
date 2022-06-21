import {
  StyledAudioRecorderContainer,
  StyledPlayerButtonContainer,
  StyledPlayerContainer,
  StyledRecordButtonContainer,
  StyledRecordTimeText,
  StyledSliderContainer,
  StyledSliderText,
  StyledStartRecordButton,
  StyledStartRecordButtonIcon,
  StyledFileSelectButton,
} from "./styled";
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from "react-native-audio-recorder-player";
import { Dimensions } from "react-native";
import React, { Component } from "react";
import Slider from "@react-native-community/slider";
import { useTheme } from "../../../styles/theme";
import { If } from "../../shared";
import DocumentPicker from "react-native-document-picker";
import { PermissionUtility } from "../../../utils/permission.util";

interface State {
  isLoggingIn: boolean;
  recordSecs: number;
  recordTime: string;
  currentPositionSec: number;
  currentDurationSec: number;
  playTime: string;
  duration: string;
  isRecording: boolean;
  isRecordingPaused: boolean;
  isPlaying: boolean;
  isPlayingPaused: boolean;
  uri: string;
  recordingStarted: boolean;
}

const screenWidth = Dimensions.get("screen").width;

export class AudioRecorder extends Component<{}, State> {
  private audioRecorderPlayer: AudioRecorderPlayer;
  private theme = useTheme();

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggingIn: false,
      recordSecs: 0,
      recordTime: "00:00:00",
      currentPositionSec: 0,
      currentDurationSec: 0,
      playTime: "00:00:00",
      duration: "00:00:00",
      isRecording: false,
      isRecordingPaused: false,
      isPlaying: false,
      isPlayingPaused: false,
      uri: "",
      recordingStarted: false,
    };

    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.1);
  }

  public render() {
    return (
      <StyledAudioRecorderContainer>
        <StyledFileSelectButton
          title="Select Audio From Storage"
          onPress={this.onFileSelect}
        />
        <If condition={!this.state.isRecording}>
          <StyledRecordButtonContainer>
            <StyledStartRecordButton onPress={this.onStartRecord}>
              <StyledStartRecordButtonIcon name="microphone" />
            </StyledStartRecordButton>
          </StyledRecordButtonContainer>
        </If>
        <If condition={this.state.recordingStarted}>
          <StyledRecordTimeText>{this.state.recordTime}</StyledRecordTimeText>

          <If condition={this.state.isRecording}>
            <StyledRecordButtonContainer>
              <StyledStartRecordButton
                onPress={
                  this.state.isRecordingPaused
                    ? this.onResumeRecord
                    : this.onPauseRecord
                }
              >
                <StyledStartRecordButtonIcon
                  name={this.state.isRecordingPaused ? "microphone" : "pause"}
                />
              </StyledStartRecordButton>
              <StyledStartRecordButton removeBg onPress={this.onStopRecord}>
                <StyledStartRecordButtonIcon name={"stop"} />
              </StyledStartRecordButton>
            </StyledRecordButtonContainer>
          </If>
          <StyledPlayerContainer>
            <StyledSliderContainer>
              <Slider
                value={this.state.currentPositionSec}
                minimumValue={0}
                disabled={true}
                maximumValue={this.state.currentDurationSec}
                step={1}
                minimumTrackTintColor={this.theme.colors.primary}
                maximumTrackTintColor={this.theme.textColors.primary}
                thumbTintColor={this.theme.colors.primary}
              />
            </StyledSliderContainer>
            <StyledSliderText>
              {this.state.playTime} / {this.state.duration}
            </StyledSliderText>
            <StyledPlayerButtonContainer>
              <If condition={!this.state.isPlaying}>
                <StyledStartRecordButton onPress={this.onStartPlay}>
                  <StyledStartRecordButtonIcon name="play" />
                </StyledStartRecordButton>
              </If>
              <If condition={this.state.isPlaying}>
                <StyledStartRecordButton
                  onPress={
                    this.state.isPlayingPaused
                      ? this.onResumePlay
                      : this.onPausePlay
                  }
                >
                  <StyledStartRecordButtonIcon
                    name={this.state.isPlayingPaused ? "play" : "pause"}
                  />
                </StyledStartRecordButton>
              </If>
              <StyledStartRecordButton removeBg onPress={this.onStopPlay}>
                <StyledStartRecordButtonIcon removeBg name="stop" />
              </StyledStartRecordButton>
            </StyledPlayerButtonContainer>
          </StyledPlayerContainer>
        </If>
      </StyledAudioRecorderContainer>
    );
  }

  private onFileSelect = async () => {
    const document = await DocumentPicker.pickSingle({ type: "audio/*" });
    console.log("file select", document);
  };

  private onStatusPress = (e: any) => {
    const touchX = e.nativeEvent.locationX;
    console.log(`touchX: ${touchX}`);
    const playWidth =
      (this.state.currentPositionSec / this.state.currentDurationSec) *
      (screenWidth - 56);
    console.log(`currentPlayWidth: ${playWidth}`);

    const currentPosition = Math.round(this.state.currentPositionSec);

    if (playWidth && playWidth < touchX) {
      const addSecs = Math.round(currentPosition + 1000);
      this.audioRecorderPlayer.seekToPlayer(addSecs);
      console.log(`addSecs: ${addSecs}`);
    } else {
      const subSecs = Math.round(currentPosition - 1000);
      this.audioRecorderPlayer.seekToPlayer(subSecs);
      console.log(`subSecs: ${subSecs}`);
    }
  };

  private onStartRecord = async () => {
    const permissionsGranted = await PermissionUtility.grantPermissions([
      "android.permission.WRITE_EXTERNAL_STORAGE",
      "android.permission.READ_EXTERNAL_STORAGE",
      "android.permission.RECORD_AUDIO",
    ]);

    if (!permissionsGranted) return;

    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };

    const uri = await this.audioRecorderPlayer.startRecorder(
      undefined,
      audioSet,
    );

    this.audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      });
    });

    this.setState({
      isRecording: true,
      recordingStarted: true,
      uri,
    });

    await this.onStopPlay();
    console.log(`uri: ${uri}`);
  };

  private onPauseRecord = async () => {
    try {
      const r = await this.audioRecorderPlayer.pauseRecorder();
      this.setState({ isRecordingPaused: true });

      console.log(r);
    } catch (err) {
      console.log("pauseRecord", err);
    }
  };

  private onResumeRecord = async () => {
    await this.audioRecorderPlayer.resumeRecorder();
    this.setState({ isRecordingPaused: false });
  };

  private onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
      isRecording: false,
    });
    console.log(result);
  };

  private onStartPlay = async () => {
    const msg = await this.audioRecorderPlayer.startPlayer();
    const volume = await this.audioRecorderPlayer.setVolume(1.0);
    console.log(`file: ${msg}`, `volume: ${volume}`);

    this.audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
    this.setState({ isPlaying: true });
    await this.onStopRecord();
  };

  private onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
    this.setState({ isPlayingPaused: true });
  };

  private onResumePlay = async () => {
    await this.audioRecorderPlayer.resumePlayer();
    this.setState({ isPlayingPaused: false });
  };

  private onStopPlay = async () => {
    console.log("onStopPlay");
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
    this.setState({
      isPlaying: false,
      isPlayingPaused: false,
      currentPositionSec: 0,
      currentDurationSec: 0,
      playTime: "00:00:00",
      duration: "00:00:00",
    });
  };
}
