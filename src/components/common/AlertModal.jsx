import Modal from '../../shared/Modal';
import Typography from '../../shared/Typography';

export default function AlertModal({ totalPrice }) {
  return (
    <Modal>
      <Typography kind="desc" $textAlign="center">
        주문이 완료되었습니다!<br />총 금액은 {totalPrice}원입니다.
      </Typography>
    </Modal>
  );
}