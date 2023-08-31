import useModalStore from '@/stores/useModalStore'
import * as S from './Dialog.styled'

export default function Dialog() {
  const { content, clearContent } = useModalStore();
  return <S.BackDrop onClick={clearContent}>
    <S.Container>
      <S.Title>팀을 선택해주세요</S.Title>
      <S.SubTitle>팀을 선택해주세요</S.SubTitle>
    </S.Container>
  </S.BackDrop>
}