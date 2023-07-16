import os
import time
from ftplib import FTP_TLS

# FTPS server credentials
HOST = 'bams49.bisecthosting.com'
USERNAME = 'SomeBody16_.218443'
PASSWORD = 'sz@YC2@2n84IdZ'
REMOTE_DIRECTORY = '/kubejs'


def upload_files(path):
    ftp = FTP_TLS(HOST)
    ftp.login(USERNAME, PASSWORD)
    ftp.prot_p()

    for root, dirs, files in os.walk(path):
        for filename in files:
            local_path = os.path.join(root, filename)
            remote_path = os.path.join(
                REMOTE_DIRECTORY, os.path.relpath(local_path, path)).replace('\\', '/')

            if os.path.isfile(local_path):
                print('Uploading %s to %s' % (local_path, remote_path))
                with open(local_path, 'rb') as file:
                    ftp.storbinary(f'STOR {remote_path}', file)

    ftp.quit()


if __name__ == "__main__":
    while True:
        try:
            upload_files('dist')
            time.sleep(3)
        except KeyboardInterrupt:
            break
        except:
            pass
