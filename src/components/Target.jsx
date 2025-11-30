// import { useGLTF } from '@react-three/drei';
// import { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// const Target = (props) => {
//   const targetRef = useRef();
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
//   );

//   useGSAP(() => {
//     gsap.to(targetRef.current.position, {
//       y: targetRef.current.position.y + 0.5,
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//     });
//   });

//   return (
//     <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
//       <primitive object={scene} />
//     </mesh>
//   );
// };

// export default Target;

// import { useGLTF } from '@react-three/drei';
// import { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// const Target = (props) => {
//   const targetRef = useRef();

//   // FIXED: Use LOCAL model instead of broken Supabase URL
//   const { scene } = useGLTF('/models/target-stand/model.gltf');

//   useGSAP(() => {
//     if (!targetRef.current) return;

//     gsap.to(targetRef.current.position, {
//       y: targetRef.current.position.y + 0.5,
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//     });
//   }, []);

//   return (
//     <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
//       <primitive object={scene} />
//     </mesh>
//   );
// };

// // PRELOAD (recommended)
// useGLTF.preload('/models/target-stand/model.gltf');

// export default Target;
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* SIMPLE PLACEHOLDER MODEL */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff7f50" />
    </mesh>
  );
};

export default Target;
