function ErrorFallback({ error }: any) {
  return (
    <div role="alert" style={{ height: 110 }}>
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
    </div>
  );
}
export default ErrorFallback;
